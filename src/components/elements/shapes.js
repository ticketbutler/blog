import React from 'react'

export const SquareShape = ({ children }) => {
  return (
    <div className="square_shape">
      {children}

      <style jsx>{`
        .square_shape div.shape {
          width: 42px;
          height: 42px;
          margin: 1px;
          position: relative;
        }

        .square_shape div.shape span {
          display: inline-block;
          width: 80%;
          height: 80%;
          // background-color: #FFF;
          position: absolute;
          transform: scaleY(-1);
        }
        .square_shape div.shape span#first {
          top: 0;
          right: 0;
          z-index: -1;
          border: 4px solid #7e52e8;
        }
        .square_shape div.shape span#second {
          bottom: 0;
          border: 4px solid #28d8a7;
          left: 0;
          z-index: -2;
        }
        @media (max-width: 1080px) {
          .square_shape div.shape span {
            opacity: 0.8;
          }
        }
        @media (max-width: 768px) {
          .square_shape div.shape {
            opacity: 0.7;
          }
        }
        @media (max-width: 600px) {
          .square_shape div.shape {
            width: 40px;
            height: 40px;
          }
          .square_shape div.shape span {
            opacity: 0.5;
          }
        }
        @media (max-width: 370px) {
          .square_shape div.shape {
            width: 36px;
            height: 36px;
          }
          .square_shape div.shape span {
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  )
}
export const BigTriangle = ({ children }) => {
  return (
    <div className="big_triangle">
      {children}

      <style jsx>{`
        .big_triangle div.shape {
          width: 200px;
          height: 200px;
          margin: 1px;
          position: relative;
          transform: rotate(-40deg);
        }

        .big_triangle div.shape span {
          opacity: 0.9;
          color: transparent;
          font-size: 200px;
        }
        .big_triangle div.shape span#first {
          -webkit-text-stroke: 20px #28d8a7;
          position: absolute;
          z-index: 2;
          left: 0;
          top: 0;
        }
        .big_triangle div.shape span#second {
          -webkit-text-stroke: 20px #7e52e8;
          position: absolute;
          z-index: 1;

          left: 0;
          top: 35%;
        }

        @media (max-width: 1080px) {
          .big_triangle div.shape {
            transform: rotate(40deg);
          }
        }

        @media (max-width: 768px) {
          .big_triangle div.shape {
            opacity: 0.7;
          }
        }

        @media (max-width: 650px) {
          .big_triangle div.shape {
            width: 100px;
            height: 100px;
            transform: rotate(40deg);
          }
          .big_triangle div.shape span {
            font-size: 100px;
          }
          .big_triangle div.shape span#first {
            -webkit-text-stroke: 10px #28d8a7;
          }
          .big_triangle div.shape span#second {
            -webkit-text-stroke: 10px #7e52e8;
          }
        }
      `}</style>
    </div>
  )
}

export const SmallTriangle = ({ children }) => {
  return (
    <div className="small_triangle">
      {children}

      <style jsx>{`
        .small_triangle div.shape {
          width: 55px;
          height: 55px;
          margin: 1px;
          position: relative;
        }

        .small_triangle div.shape span {
          opacity: 0.9;
          color: transparent;
          font-size: 70px;
        }
        .small_triangle div.shape span#first {
          -webkit-text-stroke: 5px #28d8a7;
          position: absolute;
          z-index: -1;
          left: 0;
          top: 0;
        }
        .small_triangle div.shape span#second {
          -webkit-text-stroke: 5px #dd52e8;
          position: absolute;
          z-index: -2;

          left: 0;
          top: 35%;
        }

        @media (max-width: 1080px) {
          .small_triangle div.shape span {
            opacity: 0.9;
          }
        }

        @media (max-width: 768px) {
          .small_triangle div.shape {
            width: 50px;
            height: 50px;
          }
          .small_triangle div.shape span {
            opacity: 0.7;
            font-size: 60px;
          }
        }

        @media (max-width: 600px) {
          .small_triangle div.shape {
            width: 63px;
            height: 63px;
          }
          .small_triangle div.shape span {
            opacity: 0.5;
            font-size: 50px;
          }
        }

        @media (max-width: 376px) {
          .small_triangle div.shape {
            width: 50px;
            height: 50px;
          }
          .small_triangle div.shape span {
            opacity: 0.4;
            font-size: 40px;
          }
        }
      `}</style>
    </div>
  )
}
