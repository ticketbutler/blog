import React from 'react'

export const RightImage = ({ children }) => {
  return (
    <div className="section_right_image">
      {children}
      <style jsx>{`
        .blue_box {
          position: absolute;
          height: 380px;
          width: 560px;
          right: 0px;
          top: 80px;
          background-color: #326de9;
          z-index: -2;
        }
        .clear-fix {
          clear: both;
        }

        /* Another Section style section future right */
        .first-box.green {
          position: absolute;
          height: 427px;
          width: 627px;
          right: 25px;
          background-color: #1dc9cc;
          z-index: -2;
        }

        .second-box.blue {
          position: absolute;
          top: 70px;
          right: 160px;
          height: 411px;
          width: 448px;
          z-index: -1;
          background-color: #326de9;
          -webkit-clip-path: polygon(0 0, 0% 100%, 100% 100%);
          clip-path: polygon(0 0, 0% 100%, 100% 100%);
        }

        /* Another Section style section future right second */

        .second_shape.first-box.blue {
          position: absolute;
          z-index: -2 !important;

          height: 380px;
          width: 560px;
          right: 0px;
          top: 80px;
          background-color: #326de9;
        }

        .second_shape.second-box.green {
          position: absolute;
          z-index: -1 !important;

          top: 135px;
          right: 160px;
          height: 340px;
          width: 448px;
          background-color: #1dc9cc;
          -webkit-clip-path: polygon(0 0, 0% 100%, 100% 100%);
          clip-path: polygon(0 0, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  )
}
