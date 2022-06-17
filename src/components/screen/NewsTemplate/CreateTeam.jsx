
import { officialEmail } from 'constants/maps'
import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

export default function CreateTeam({name, id}){
    return(
        <>
        <div>
        恭喜您！您的团队<strong>{name}</strong>已创建成功，此封邮件确认您以队长身份成功报名UFA第二届模拟投资挑战赛。
        </div>
        <br/>
        <div>
        请扫码添加UFA赛事小助手:
        </div>
        <br/>

        <div style={{display:"flex",justifyContent:"center"}}>
        <Image
         src ={"/小助手.jpg"}
         style={{width:"200px", height:"200px"}}
         />
         </div>
        <br/>
        <br/>
        <div>
          {/* <span style={{color:"blue"}}>如若无法加入请联系小助手</span>  */}
          或发送邮箱至 <span style={{color:"red"}}>{officialEmail}</span>
        </div>

        <hr/>

        <div>
        <span style={{color:"red"}}>如果您想以团队形式（大于1人）参赛，请阅读以下信息：</span> 
        </div>

        <br/>
        <div>
            <ul style={{margin:0}}>
            1. 前往ufacareer.com注册UFA账号。
            </ul>
            <ul style={{margin:0}}>
            2. 在“报名参赛”页面选择“加入团队”，按团队名称查找您的团队。
            </ul>
            <ul style={{margin:0}}>
            3. 发送加入团队申请。
            </ul>
            <ul style={{margin:0}}>
            4. 您通过邀请后，团队即组队完成。
            </ul >
            <br/>
            （团员入队申请可在UFA官网首小铃铛中<strong> “团队信息”</strong> 中查看！）
        </div>




        <br/>
              UFA 组委会
        </>
    )
    }