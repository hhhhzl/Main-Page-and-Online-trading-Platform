import React, { useState, useRef,useEffect } from 'react'

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'
import { canvasPreview } from './canvasPreview'
import { useDebounceEffect } from './useDebounceEffect'

import 'react-image-crop/dist/ReactCrop.css'
import { Modal,Image,Button } from "react-bootstrap";
// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: 'px',
        width: mediaWidth,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

export default function TeamRegisterModel({showModal,hideModal,getBase64,imgSrc}) {
  const previewCanvasRef = useRef(null)
  const imgRef = useRef(null)
  const [crop, setCrop] = useState()
  const [completedCrop, setCompletedCrop] = useState()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState(1)
  const [tailorUrl,setTailorUrl] = useState();



  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect));
	  setCompletedCrop(centerAspectCrop(width, height, aspect))
    }
  }


  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
         canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        );
		const a = previewCanvasRef.current.toDataURL('image/png');
		setTailorUrl(a);
      }
    },
    0)
	
	function onCropComplete(e){
		setCompletedCrop(e)
	}
	
	function submit(){
		setCrop();
		setCompletedCrop();
		getBase64(tailorUrl)
	}
	
	function trHideModal(){
		setCrop();
		setCompletedCrop();
		hideModal();
	}

  // function handleToggleAspectClick() {
  //   if (aspect) {
  //     setAspect(undefined)
  //   } else if (imgRef.current) {
  //     const { width, height } = imgRef.current
  //     setAspect(1)
  //     setCrop(centerAspectCrop(width, height,1))
  //   }
  // }

  return (
	<Modal
	  show={showModal}
	  centered
	  className="rules-model"
	>
		<div style={{
			background: "#FFFFFF"
		}}>
			<div>
				{Boolean(imgSrc) && (
				  <ReactCrop
					crop={crop}
					onChange={(_, percentCrop) => setCrop(percentCrop)}
					onComplete={(c) => onCropComplete(c)}
					aspect={aspect}
				  >
					<img
					  ref={imgRef}
					  alt="Crop me"
					  src={imgSrc}
					  style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
					  onLoad={onImageLoad}
					/>
				  </ReactCrop>
				)}
				<div>
				  {Boolean(completedCrop) && (
					<canvas
					  hidden
					  ref={previewCanvasRef}
					  style={{
						border: '1px solid black',
						objectFit: 'contain',
						width: completedCrop.width,
						height: completedCrop.height,
					  }}
					/>
				  )}
				</div>
			</div>
			<div
				style={{
					margin:"10px 0",
				}}
			>
				<div
					style={{
						textAlign:"end",
						width: "95%"
					}}
				>
					<Button
					style={{
						background: "#F5F6F8",
						borderRadius: "4px 4px 4px 4px",
						opacity: "1",
						border:"0",
						color:"rgb(42, 43, 48)",
						height: "38px"
					}}
					 onClick={()=> trHideModal()}
					>取消</Button>
					<Button 
						style={{
							height: "38px"
						}}
					onClick={() => submit()}>确认</Button>
				</div>
			</div>
		</div>
	</Modal>
  )
}
