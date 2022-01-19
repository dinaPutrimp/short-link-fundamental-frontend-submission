class ShortenInpt extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    set submitEvent(event) {
        this._submitEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#textLink").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        #form-container {
            max-width: 700px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
        }

        #form-container>input {
            width: 80%;
            padding: 10px 15px;
            border: none;
            background: #191919;
            color: wheat;
            border-radius: 3px;
            font-size: 1rem;
            margin-right: 5px;
        }

        #form-container>input::placeholder {
            color: wheat;
        }

        #form-container>input:focus {
            outline: none;
        }

        #form-container>#submit {
            width: 20%;
            padding: 10px;
            border-radius: 3px;
            font-size: 1rem;
            cursor: pointer;
            border: none;
            background: #FFA900;
            font-weight: 600;
        }

        #submit:active {
            transform: scale(0.98);
        }

        @media screen only and (max-width: 550px){
            #form-container{
                flex-direction: column;
            }

            #form-container > input{
                width: 100%;
            }
            #form-container > #submit{
                width: 100%;
            }
        }
        </style>
                <div id="form-container">
                    <input type="text" id="textLink" placeholder="Enter link...">
                    <button id="submit">Shorten</button>
                </div>
        `;

        this.shadowDOM.querySelector("#submit").addEventListener("click", this._submitEvent);
    }
}

customElements.define("shorten-inpt", ShortenInpt);