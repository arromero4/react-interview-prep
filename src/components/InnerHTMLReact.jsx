import React from "react";

export default function InnerHTMLReact() {
  let data = '<p style="font-size: 20px; color: red">This is my Home 1</p>'
  return <div>
    <div dangerouslySetInnerHTML={{__html: data}}></div>
    <p style={{fontSize: 15, color: 'blue'}}>This is my Home 2
    </p>
    </div>

}
