import type { ReactNode } from "react";

const CDJ_3000X_WIDTH_MM = 34460;
const DJM_A9_WIDTH_MM = 40740;

const M = (props: { children: ReactNode }) => {
	return <span className="text-red-500">
		{props.children}
	</span>
}

export default function HospitalityRider() {

	return <div className="flex flex-col gap-12">
		<div className="flex flex-row items-center justify-between">
			<div className="text-xl font-snasm">Hospitality rider:</div>
			<div className="text-xl font-snasm">anix</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Requirements</div>

			<div className="flex flex-col gap-2 text-slate-600">
				<div className="text-base font-snasm lowercase">1x locker for my backpack + camera gear</div>
			</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Drinks</div>

			<div className="flex flex-col gap-2 text-slate-600">
				<div className="text-base font-snasm lowercase">6x Aquarius Red (500ml)</div>
				<div className="text-base font-snasm lowercase">6x Sanpellegrino Limonata (33cl)</div>
				<div className="text-base font-snasm lowercase">1x Bacardi Carta Blanca (70cl)</div>
				<div className="text-base font-snasm lowercase">6x Coca Cola (330ml)</div>
				<div className="text-base font-snasm lowercase">1x Eristof Red (70cl)</div>
				<div className="text-base font-snasm lowercase">6x Redbull (366ml)</div>
			</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Guests</div>

			<div className="flex flex-col gap-2 text-slate-600">
				<div className="text-base font-snasm lowercase">2x crew (driver + camera)</div>
				<div className="text-base font-snasm lowercase">3x guests</div>
			</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Optional</div>

			<div className="flex flex-col gap-2 text-slate-600">
				<div className="text-base font-snasm lowercase">1x small towl</div>
				<div className="text-base font-snasm lowercase">1x piece of fruit</div>
			</div>
		</div>

	</div>
}