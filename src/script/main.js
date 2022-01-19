import './component/out-link.js';
import '../script/component/shorten.js';
import axios from 'axios';

const main = () => {
    const inputLink = document.querySelector("shorten-inpt");
    const output = document.querySelector("out-link");
    const Shorten_API = 'https://api.shrtco.de/v2/shorten?url=';

    const getShortLink = async () => {
        try {
            const response = await axios.get(`${Shorten_API + inputLink.value.trim()}`);
            const data = await response.data;
            if (data.error) {
                showError("Please fill the form!");
            } else {
                showLink(data.result.short_link2);
                setTimeout(cardAppear, 10000);
            }
        } catch (err) {
            showError(err.message);
        }
    };

    const showLink = (url) => {
        output.shortLink = url;
    }

    const showError = (err = "Please check internet connection!") => {
        alert(err);
    }

    const cardAppear = () => {
        output.dissapear();
    }

    inputLink.submitEvent = getShortLink;
}


export default main;
