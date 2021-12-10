import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../SharedComponents/NavBar';

function Publisher() {
    return (
      <div>
          <NavBar/>
          <div className="container py-3">
            <div className="row justify-content-center">
                <div className="col-xl-2 col-md-3 col-sm-6 py-4" >
                    <Card className="h-100 book__card__bookSearch">
                        <Card.Img variant="top" className="h-50" src="https://upload.wikimedia.org/wikipedia/commons/4/47/LOGO_%D8%AF%D8%A7%D8%B1_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85.jpg" alt="دار السلام" />
                        <Card.Body className="book__card__bookSearch">
                            <Card.Title className="text-center">دار السلام</Card.Title>
                            <Card.Text>
                                <Link to="/storebooks" className="btn btn btn-trans mt-3">Visit Book Store</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-6 py-4" >
                    <Card className="h-100 book__card__bookSearch">
                        <Card.Img variant="top" className="h-50" src="https://pbs.twimg.com/profile_images/1403624559899820033/DAg3Bjht_400x400.jpg" alt="" />
                        <Card.Body className="book__card__bookSearch">
                            <Card.Title className="text-center">الرواق</Card.Title>
                            <Card.Text>
                                <Link to="/storebooks" className="btn btn btn-trans mt-3">Visit Book Store</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-6 py-4" >
                    <Card className="h-100 book__card__bookSearch">
                        <Card.Img variant="top" className="h-50 " src="data:image/png;base64,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" alt="بنك المعرفة" />
                        <Card.Body className="book__card__bookSearch ">
                            <Card.Title className="text-center">بنك المعرفة</Card.Title>
                            <Card.Text>
                                <Link to="/storebooks" className="btn btn btn-trans mt-3">Visit Book Store</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-6 py-4" >
                    <Card className="h-100 book__card__bookSearch">
                        <Card.Img variant="top" className="h-50" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.erj-t3kmkGraq1TrxSCTdwAAAA%26pid%3DApi&f=1" alt="دار المعارف" />
                        <Card.Body className="book__card__bookSearch">
                            <Card.Title className="text-center">دار المعارف</Card.Title>
                            <Card.Text>
                                <Link to="/storebooks" className="btn btn btn-trans mt-3">Visit Book Store</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-6 py-4" >
                    <Card className="h-100 book__card__bookSearch">
                        <Card.Img variant="top" className="h-50" src="https://dardawen.com/wp-content/uploads/2021/06/DarDawen_201908_390729.png" alt="دار دون" />
                        <Card.Body className="book__card__bookSearch">
                            <Card.Title className="text-center">دار دون</Card.Title>
                            <Card.Text>
                                <Link to="/storebooks" className="btn btn btn-trans mt-3">Visit Book Store</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-6 py-4" >
                    <Card className="h-100 book__card__bookSearch">
                        <Card.Img variant="top" className="h-50" src="https://www.hindawi.org/content/images/logo.svg" alt="هنداوي" />
                        <Card.Body className="book__card__bookSearch">
                            <Card.Title className="text-center">هنداوي</Card.Title>
                            <Card.Text>
                                <Link to="/storebooks" className="btn btn btn-trans mt-3">Visit Book Store</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-6 py-4" >
                    <Card className="h-100 book__card__bookSearch">
                        <Card.Img variant="top" className="h-50" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnewtechclub.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fbooksdrd-logo.png&f=1&nofb=1" alt=" عصير الكتب" />
                        <Card.Body className="book__card__bookSearch">
                            <Card.Title className="text-center"> عصير الكتب</Card.Title>
                            <Card.Text>
                                <Link to="/storebooks" className="btn btn btn-trans mt-3">Visit Book Store</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-6 py-4" >
                    <Card className="h-100 book__card__bookSearch">
                        <Card.Img variant="top" className="h-50" src="data:image/jpeg;base64,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58bdPSUlXiLDYigys1QagRvRrX3H4J1HEVKof+OmIc/doVf8soA+MurrsnNjve1liab1UtQYJ4tpBP8ATfYHzIPpOT0UegaNVtWpDcM3fZTsT48zz6X6SJSqVsdiELUmo00bUSzrqbusNOlbjSdV922sNr8o2JpVsbmtNvm6p2VTaszrcpcggKoJIZSRpa1ib9IkLl7JFJaS4OpTxBCU6T6SNRUadKsAWvcg6hfffcG+4nZmd8Cv8HCIAwsHVgpTrZRYr5be7eSaeH04x2IFmCkfiAYE/DTMfmua1M0zOrQw5r0+zICqlMt2m5B1kldK3At3gpB5nkLJuucrJGjyd1SrUTCo6oGLB2JKuzMdem5JADeNr322lrKDK6eYBafz04REFrqqPqCjoLPpBtt1A85fzm93eN6EREjoiIgIiICIiAiIgIiICIiAiIgIiIEWjhOzxbPUdmYiwB5Kt72A9wufKdDg6ZxOsonaWtr0rqt+K152iXaahERIqBTSvUxTGqyomkqgG7XP2j02tt68hbeThabUsMq12LsFAZiACx6mw2F/Cdol2khERIqNjUqsn/BZEb76Fh7rMu/xn5gMJ81Ul2Z3bd2a1zbkABsqjeyjYXPUkmVEu0112hZbh3w1MiuU5k93Wdydzdj+nTxMmxElJNEREKREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z" alt="مبدعون" />
                        <Card.Body className="book__card__bookSearch">
                            <Card.Title className="text-center">مبدعون</Card.Title>
                            <Card.Text>
                                <Link to="/storebooks" className="btn btn btn-trans mt-3">Visit Book Store</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-6 py-4" >
                    <Card className="h-100 book__card__bookSearch">
                        <Card.Img variant="top" className="h-50" src="https://upload.wikimedia.org/wikipedia/ar/4/4e/Kotopia_logo.jpg" alt="كتوبيا" />
                        <Card.Body className="book__card__bookSearch">
                            <Card.Title className="text-center">كتوبيا</Card.Title>
                            <Card.Text>
                                <Link to="/storebooks" className="btn btn-trans mt-3">Visit Book Store</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Publisher
