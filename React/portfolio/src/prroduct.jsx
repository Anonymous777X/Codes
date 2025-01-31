function Product({idx,heading}){
    let features =[["Wireless","999mAh Battery"],
    ["SuperFast","Apple Tab Support"],
    ["RGB Backlit","Customizable"],
    ["Durable","Long Lasting 10000 mAh Battery"],   
];
let images =[["https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-side-view-graphite.png?v=1"],
            ["https://clipground.com/images/apple-pencil-png-3.png"],
            ["https://5.imimg.com/data5/DS/MC/HA/SELLER-6733828/transformer1-png-500x500.png"],
            ["https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1586748798.62182075.png"]]
    let price =[[12000,9999],[15999,8999],[1500,899],[1999,999]];
    return(
        <>
        <div id='card'>
            <div id="upper">
            <div><h3>{heading}</h3></div>
            <div id="prod-img-div"><div><img src={images[idx]} id="prod-img" alt="" /></div></div>
            <div>
            <li>{features[idx][0]}</li>
            <li>{features[idx][1]}</li>
            </div>
            </div>
            <div id="lower">
                <span id="oldprice">{price[idx][0]}</span>
                &nbsp;&nbsp;&nbsp;
                <span id="newprice">{price[idx][1]}</span>
            </div>
        </div>
        </>
    )
}
export default Product