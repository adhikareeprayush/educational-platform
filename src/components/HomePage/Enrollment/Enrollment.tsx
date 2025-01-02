import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Shared/Container/Container";

const Enrollment = () => {
    return (
        <div className="bg-neutral-20 py-[96px]">
            <Container>
                <div className="bg-white  rounded-[64px] shadow-shadow-light-gray font-Inter flex items-center justify-between">
                    <div className="pl-[64px] py-[64px] flex flex-col gap-12">
                        <h1 className="text-primary-15 text-xl md:text-[48px] font-semibold leading-7 md:leading-[56px]">On Every Enrollment, We Contribute to a Child’s Education</h1>

                        <button className="bg-primary-gradient px-6 py-5 text-primary-10 text-xl font-semibold leading-7 rounded-[10px] shadow-primary-shadow flex items-center gap-[10px] w-fit">
                            <img src={ICONS.coupon} alt="coupon" className="size-6" />
                            Join us today and make a difference!
                        </button>
                    </div>

                    <img src={IMAGES.enrollment} alt="" className="rounded-r-[64px] w-full h-full" />
                </div>
            </Container>
        </div>
    );
};

export default Enrollment;