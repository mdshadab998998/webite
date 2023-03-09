import "./Banner.css"
const Banner = (props) => {
    return (
        <div>
            <div id={props.revr} class="position-relative  d-flex justify-content-center align-item-center flex-wrap overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 class="display-4 fw-normal">Change is the end result of all true Learning</h1>
                    <p class="lead down fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique at libero a gravida.</p>
                    <a class="btn down btn-outline-secondary" href="shadab">Coming soon</a>
                    <div>
                        <p className={props.cls}></p>
                    </div>
                </div>
                {/* {props.cob} */}
                <div class="product-device shadow-sm  d-md-block">
                <div >
                <img class="onlyimage" src={props.src}  alt="none" />
                </div>
                </div>
            </div>
        </div>
    )
}
export default Banner