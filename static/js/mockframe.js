function newMockFrame(options = { dark: false, style: "regular" }) {
  var iframes = document.querySelectorAll("iframe");
  for (let iframe of iframes) {
    let parent = iframe.parentNode;
    let wrapper = document.createElement('div');
    wrapper.setAttribute("class", "window");
    let header = document.createElement("div");
    header.setAttribute("class", "header");
    header.innerHTML = `<div class="mockup-button red">&nbsp;&nbsp;</div>
          <div class="mockup-button yellow">&nbsp;&nbsp;</div>
          <div class="mockup-button green">&nbsp;&nbsp;</div>
          <div class="url-wrapper">
            <div class="url">https://llava.hliu.cc</div>
          </div>`
    parent.replaceChild(wrapper, iframe);
    wrapper.appendChild(header);
    wrapper.appendChild(iframe);
    let harry_styles = document.createElement("style");
    harry_styles.innerText = `
      .url-wrapper {
        text-align: center;
        position: relative;
        top: -43px;
        align-content: center;
        width: 100%;
        float: none;
        overflow: hidden;
      }

      .url {
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 20px;
        padding-right: 20px;
        position: relative;
        margin-left: 100px;
        margin-right: 100px;
        padding-top: 3.5px;
        padding-bottom: 3.5px;
        border-radius: 5px;
        background: #f5f5f5;
        font-family: arial, sans-serif;
        user-select: none;
      }

      iframe {
        width: 100%;
        height: 100%;
        border: none;
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
        display: block;
      }

      .window {
        border-radius: 9px;
        background-color: white;
        width: 100%;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
      }

      .header {
        margin: 0px;
        background: #e8e8e8;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
        height: 15px;
        padding: 15px;
        box-sizing: content-box;
        text-align: left;
      }

      .mockup-button {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: inline-block;
      }

      .red {
        background-color: #ff5f56;
      }

      .yellow {
        background-color: #ffc343;
        margin-left: 3px;
      }

      .green {
        background-color: #32a852;
        margin-left: 3px;
      }
    `;
    document.body.appendChild(harry_styles);

    if (options.dark === true) {
      let headers = document.querySelectorAll('.header');
      for (let header of headers) {
        header.style.backgroundColor = "rgb(54, 56, 58)";
      }
    }

    if (options.style === "darken") {
      let buttons = document.querySelectorAll('.mockup-button');
      for (let button of buttons) {
        button.style.backgroundColor = "#979799";
      }
    }
  }
};
