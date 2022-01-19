class OutLink extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set shortLink(link) {
        this._shorLink = link;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .link-output {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #191919;
            color: wheat;
            padding: 10px 20px;
            border-radius: 5px;
        }

        .link-output p {
            font-style: italic;
        }

        #btn-copy {
            border: none;
            padding: 5px 15px;
            cursor: pointer;
            border-radius: 5px;
            background: #FF7600;
        }
        </style>
            <div class="link-output">
                <p id="link">${this._shorLink}</p>
                <button id="btn-copy">Copy</button>
            </div>
        `;

        this.shadowDOM.querySelector('#btn-copy').addEventListener('click', () => {
            const text = this.shadowDOM.querySelector('#link').innerText;
            copyToClipboard(text);
            this.shadowDOM.querySelector('#btn-copy').innerHTML = "Copied";
        });

        const copyToClipboard = (txt) => {
            const text = document.createElement("textarea");
            text.textContent = txt;
            document.body.appendChild(text);
            text.select();
            document.execCommand("copy");
            document.body.removeChild(text);
        };
    }

    dissapear() {
        this.shadowDOM.querySelector('.link-output').remove();
    }

}

customElements.define("out-link", OutLink);