import React from 'react'

const success = () => {

    const body = {
        textAlign: "center",
        background: "#EBF0F5",
        alignItems:"center",
        height:"100vh",
        display:"flex",
        justifyContent:"center"
      };

    const card={
        background: "white",
        padding: "60px",
        borderRadius: "4px",
        boxShadow: "0 2px 3px #C8D0D8",
        display: "inline-block",
        margin: "0 auto",
    }


    const heading= {
        color: "#88B04B",
        fontFamily: "Nunito Sans Helvetica Neue sans-serif",
        fontWeight: 900,
        fontSize: "40px",
        marginBottom: "10px",
      }
    const  paragrapgh= {
        color: "#404F5E",
        fontFamily: "Nunito Sans Helvetica Neue sans-serif",
        fontSize:"20px",
        margin: 0,
      }
  const icon= {
      color: "#9ABC66",
      fontSize: "100px",
      lineHeight: "200px",
      marginLeft:"-15px",
    }

  return (
    <body style={body} >
      <div style={card}>
      <div style={{ borderRadius: '200px', height:"200px", width:"200px", background:"#F8FAF5", margin:"0 auto"  }}>
        <i style={icon}>✓</i>
      </div>
        <h1 style={heading}>Success</h1> 
        <p style={paragrapgh}>We received your purchase request;<br/> we'll be in touch shortly!</p>
      </div>
    </body>  )
}

export default success