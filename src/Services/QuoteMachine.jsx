import axios from "axios";
import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useEffect, useState } from "react";
import Loader from "../Components/SharedComponents/Loader/Loader";
import './quotemachine.css'

const QuoteMachine = () => {
    const [Quote, setQuote] = useState({
        quote: "",
        author: "",
    });
    useEffect(() => {
        axios
            .get("https://dummyjson.com/quotes/random")
            .then((response) => {
                setQuote({
                    quote: response.data.quote,
                    author: response.data.author,
                });
            })
            .catch((err) => {
                return err
            });
    }, []);
    return Quote.quote === "" ? (
        <Loader />
    ) : (
        <div class="card quote-machine text-center w-75 mx-auto mb-3">
            <div class="card-header fw-bold text-white" style={{ background: '#ae7a5d' }}>Quote of The Day</div>
            <div class="card-body">
                <h5 class="card-title">{Quote.author === "Unknown" ? "" : Quote.author}</h5>
                <p class="card-text d-flex align-align-items-center justify-content-center">
                    <div className="mx-2" style={{ color: '#9f4431' }}>
                        <RiDoubleQuotesL />
                    </div>
                    <i className="fw-light-gray">
                        {Quote.quote}
                    </i>
                    <div className="mx-2" style={{ color: '#9f4431  ' }}>
                        <RiDoubleQuotesR />
                    </div>
                </p>
            </div>
            <div class="card-footer fw-bold text-white" style={{ background: '#ae7a5d' }}>Booketo</div>
        </div>
    );
};

export default QuoteMachine;
