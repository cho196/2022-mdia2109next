import styled from 'styled-components';

const RedCont = styled.div`
backgroundColor:${props=>props.cl};
color:${props=>props.text_cl};
`;
export default function ImgCard({
    img="/whoareyou.png",
    bg="red",
    tcl="#fff",
    children=null
}) {
    // const mystyle = {
    //     backgroundColor:'red'
    // }
    return <RedCont cl={bg} text_cl={tcl}>
        <img src={img} />
        <h1>This is a cat</h1>
        {children}
    </RedCont>
}