import React from "react";
import "./footer.css";

const Footer = ({eventKey}) => (
  <footer style={{
    borderTop:eventKey == 2 || eventKey == 4 ? 'none' : '1px solid #E5E8EE'
  }}>
    {/* <div className="line"></div> */}
    <div>
      <br />
      <br />
      <h6 className="footer-footer">Copyright © 2022 UFA. All Rights Reserved. 上海资菩渡科技有限公司 版权所有</h6>
    </div>
  </footer>
);

export default Footer;
