import React, { Component } from 'react'

export default class Offers extends Component {

    constructor() {
        super();
        this.state = {
            imgArr: [
                { url: 'https://static.abhibus.com/busgallery/offerbanners/Aug2021/01/1627756911/476X220.png', text: 'offer1' },
                { url: 'https://static.abhibus.com/busgallery/offerbanners/Oct2020/16/1602860352/lazypay-476x220.png', text: 'offer2' },
                { url: 'https://static.abhibus.com/busgallery/offerbanners/Apr2021/10/1618038157/476X220.png', text: 'offer3' },
                { url: 'https://static.abhibus.com/busgallery/offerbanners/Aug2021/01/1627756911/476X220.png', text: 'offer4' }
            ]
        }
    }
    render() {
        return (
            <div>
                <h3>AbhiBus Offers</h3>
                <div className="d-flex container imgsec">
                    {this.state.imgArr.map((item, index) => {
                        return (
                            <div key={index}>
                                <h6>Offer image</h6>
                                <img src={item.url} alt={item.text} />
                            </div>)
                    })}
                </div>

            </div>
        )
    }
}
