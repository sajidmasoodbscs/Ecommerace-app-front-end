import React from 'react'

const cancel = () => {

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
        color: "red",
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
      color: "red",
      fontSize: "100px",
      lineHeight: "200px",
      fontStyle:"normal",
    }

  return (
    <body style={body} >
      <div style={card}>
      <div style={{ borderRadius: '200px', height:"200px", width:"200px", background:"#F8FAF5", margin:"0 auto"  }}>
        <i style={icon}>&#10060;</i>
      </div>
        <h1 style={heading}>Failed</h1> 
        <p style={paragrapgh}>Your payment failed due to ;<br/> Please try again.</p>
      </div>
    </body>  )
}

export default cancel