import React from 'react';
import Typography from '@mui/material/Typography';
import './recent.css';
import Node from '../asset/node_js.png'

function recentCourses(props) {
  return (
        <div style={{
            marginTop:"80px",
            width:"100%"
        }}>
            <Typography  sx={{
                fontWeight:'medium',
                color:"#5F5F5F",
                fontSize:"33px",ml:1,
                mb:5
            }}  >
                {props.title}
            </Typography>
            <div style={{
                height:"190px",
                backgroundColor:"#F5F5F5",
                // width:"100%",
                paddingTop:"28px",
                display:'flex',
                // whiteSpace: "nowrap",
                flexWrap: "nowrap",
                overflowX: "auto",
                // overflowY: "hidden",
                borderRadius:"4px",
                paddingRight:'28px',
                paddingBottom:'28px'
            }}>

                <div 
                    style={{
                        height:"100%",
                        backgroundColor:"white",
                        width:"600px",
                        marginLeft:"28px",
                        // display:'inline-block',
                        flex: "0 0 auto",
                        borderRadius:"4px",
                        display:'flex'
                    }}
                >
                    <div style={{
                        width:"61%"
                    }}>
                        <img src={Node} style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius:"4px"

                        }}/>
                    </div>
                    <div style={{paddingTop:"2px",marginLeft:"28px"}}>
                        <div style={{
                            marginTop:"20px",
                            display:"flex",
                            // marginLeft:"24px"
                        }}>
                            <div 
                                style={{
                                    padding:"8px",
                                    backgroundColor:"#F5F5F5",
                                    textAlign: "center",
                                    borderRadius:"4px",
                                    height:"18px",
                                    minWidth:"50px"
                                }}
                            >
                                <Typography  sx={{
                                    fontWeight:'medium',
                                    color:"#5F5F5F",
                                    fontSize:"12px"
                                }}  >
                                    English
                                </Typography>
                            </div>
                            <div 
                                style={{
                                    padding:"8px",
                                    backgroundColor:"#F5F5F5",
                                    textAlign: "center",
                                    marginLeft:"10px",
                                    borderRadius:"4px",
                                    height:"18px",
                                    minWidth:"50px"
                                }}
                            >
                                <Typography  sx={{
                                    fontWeight:'medium',
                                    color:"#5F5F5F",
                                    fontSize:"12px"
                                }}  >
                                    Node js
                                </Typography>
                            </div>
                        </div>
                        <div style={{width:"200px", whiteSpace: 'normal', wordWrap: 'break-word'}}>
                            <Typography  sx={{
                                    fontWeight:'medium',
                                    color:"black",
                                    fontSize:"12px",
                                    // marginLeft:"27px",
                                    marginTop:"10px",
                                    
                                }}
                                >
                                    Node js with express framework uuuuu auscbc khachhashc
                            </Typography>
                        </div>
                        <div style={{
                            width:"100%",
                            display:'flex',
                            // marginLeft:"27px"
                            marginTop:"15px",
                            // bottom:-1
                        }}>
                            <i className="far fa-star fa-lg"></i>
                            <i className="far fa-star fa-lg"></i>
                            <i className="far fa-star fa-lg"></i>
                            <i className="far fa-star fa-lg"></i>
                            <i className="far fa-star fa-lg"></i>
                        </div>
                        <div>
                            <Typography  sx={{
                                    fontWeight:'medium',
                                    color:"black",
                                    fontSize:"12px",
                                    // marginLeft:"27px",
                                    marginTop:"15px",
                                    
                                }}
                                >
                                Post on : 12/01/2022
                            </Typography>
                        </div>
                    </div>
                </div>
                <div 
                    style={{
                        height:"100%",
                        backgroundColor:"white",
                        width:"600px",
                        marginLeft:"28px",
                        // display:'inline-block',
                        flex: "0 0 auto",
                        borderRadius:"4px",
                        display:'flex'
                    }}
                >
                    <div style={{
                        width:"61%"
                    }}>
                        <img src={Node} style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius:"4px"

                        }}/>
                    </div>
                    <div style={{paddingTop:"2px",marginLeft:"28px"}}>
                        <div style={{
                            marginTop:"20px",
                            display:"flex",
                            // marginLeft:"24px"
                        }}>
                            <div 
                                style={{
                                    padding:"8px",
                                    backgroundColor:"#F5F5F5",
                                    textAlign: "center",
                                    borderRadius:"4px",
                                    height:"18px",
                                    minWidth:"50px"
                                }}
                            >
                                <Typography  sx={{
                                    fontWeight:'medium',
                                    color:"#5F5F5F",
                                    fontSize:"12px"
                                }}  >
                                    English
                                </Typography>
                            </div>
                            <div 
                                style={{
                                    padding:"8px",
                                    backgroundColor:"#F5F5F5",
                                    textAlign: "center",
                                    marginLeft:"10px",
                                    borderRadius:"4px",
                                    height:"18px",
                                    minWidth:"50px"
                                }}
                            >
                                <Typography  sx={{
                                    fontWeight:'medium',
                                    color:"#5F5F5F",
                                    fontSize:"12px"
                                }}  >
                                    Node js
                                </Typography>
                            </div>
                        </div>
                        <div style={{width:"200px", whiteSpace: 'normal', wordWrap: 'break-word'}}>
                            <Typography  sx={{
                                    fontWeight:'medium',
                                    color:"black",
                                    fontSize:"12px",
                                    // marginLeft:"27px",
                                    marginTop:"10px",
                                    
                                }}
                                >
                                    Node js with express framework uuuuu auscbc khachhashc
                            </Typography>
                        </div>
                        <div style={{
                            width:"100%",
                            display:'flex',
                            // marginLeft:"27px"
                            marginTop:"15px",
                            // bottom:-1
                        }}>
                            <i className="far fa-star fa-lg"></i>
                            <i className="far fa-star fa-lg"></i>
                            <i className="far fa-star fa-lg"></i>
                            <i className="far fa-star fa-lg"></i>
                            <i className="far fa-star fa-lg"></i>
                        </div>
                        <div>
                            <Typography  sx={{
                                    fontWeight:'medium',
                                    color:"black",
                                    fontSize:"12px",
                                    // marginLeft:"27px",
                                    marginTop:"15px",
                                    
                                }}
                                >
                                Post on : 12/01/2022
                            </Typography>
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default recentCourses;
