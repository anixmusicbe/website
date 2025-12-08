import HospitalityRider from "../components/rider/HospitalityRider";
import PressKit from "../components/rider/PressKit";
import TechnicalRider from "../components/rider/TechnicalRider";


export default function Rider() {

	return <div className="w-full min-h-dvh flex flex-col bg-white text-black">

		<div className="w-full max-w-[1200px] mx-auto p-4 sm:p-16 flex flex-col gap-32">
			<PressKit />
			<HospitalityRider />
			<TechnicalRider />
		</div>
	</div>
}
