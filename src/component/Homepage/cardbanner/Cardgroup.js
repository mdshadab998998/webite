import Card from "./Card"

const Cardgroup=()=>{
    return(
        <div className="d-flex m-0 gap-5 justify-content-center mt-5 mb-5 bg-white">
            <Card image="online.png" title="Online Counseling" para="Lorem ipsum dolor sit amet, sectet adipiscing elit, sed do mod tempor incididunt ut labore dolore.

" />
            <Card image="audio.png" title="Audio course" para="Lorem ipsum dolor sit amet, sectet adipiscing elit, sed do mod tempor incididunt ut labore dolore.

"/>
            <Card image="prof.png" title="Profesional traning" para="Lorem ipsum dolor sit amet, sectet adipiscing elit, sed do mod tempor incididunt ut labore dolore.

" />
        </div>
    )
}
export default Cardgroup