import type { ReactNode } from "react";

const CDJ_3000X_WIDTH_MM = 34460;
const DJM_A9_WIDTH_MM = 40740;

const M = (props: { children: ReactNode }) => {
	return <span className="text-red-500">
		{props.children}
	</span>
}

export default function TechnicalRider() {

	return <div className="flex flex-col gap-12">
		<div className="flex flex-row items-center justify-between">
			<div className="text-xl font-snasm">Technical rider:</div>
			<div className="text-xl font-snasm">anix</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Requirements</div>

			<div className="flex flex-col gap-2 text-slate-600">
				<div className="text-base font-snasm lowercase">4x Alphatheta <M>CDJ-3000X</M> professional DJ players.</div>
				<div className="text-base font-snasm lowercase">1x Pioneer DJ <M>DJM-A9</M> 4-channel professional DJ mixer.</div>
				<div className="flex flex-col">
					<div className="text-base font-snasm lowercase">All of the above equipment linked.</div>
					<div className="text-base font-snasm lowercase">5-port/1-gigabit network switch with <M>Cat5e/Cat6</M> cables</div>
				</div>
				<div className="text-base font-snasm lowercase"><M>DJM-A9</M> must be updated to the latest firmware.</div>
				<div className="text-base font-snasm lowercase"><M>CDJ-3000X</M> must be updated to the latest firmware.</div>
				<div className="text-base font-snasm lowercase">All <M>CDJ-3000x</M> to be connected digital and analog to the <M>DJM-A9</M> mixer.</div>
			</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Alternative DJ players</div>

			<div className="flex flex-col gap-2 text-slate-600">
				<div className="text-base font-snasm lowercase">CDJ-3000</div>
				<div className="text-base font-snasm lowercase">CDJ-2000NXS2</div>
				<div className="text-base font-snasm lowercase">CDJ-2000NXS</div>
				<div className="text-base font-snasm lowercase">XDJ-1000MK2</div>
			</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Alternative DJ mixers</div>

			<div className="flex flex-col gap-2 text-slate-600">
				<div className="text-base font-snasm lowercase">DJM-900NXS2</div>
				<div className="text-base font-snasm lowercase">DJM-900NXS</div>
				<div className="text-base font-snasm lowercase">DJM-750MK2</div>
			</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Top view</div>

			<div className="@container">
				<div className="grid gap-0.5 pt-[2.6cqw] pb-[2.6cqw]" style={{ gridTemplateColumns: `${CDJ_3000X_WIDTH_MM}fr ${CDJ_3000X_WIDTH_MM}fr ${DJM_A9_WIDTH_MM}fr ${CDJ_3000X_WIDTH_MM}fr ${CDJ_3000X_WIDTH_MM}fr` }}>
					<div className="">
						<img src="/gear/cdj-3000x/spec_01.webp" alt="Top view" className="h-full object-contain relative -left-[0.025cqw]" style={{ scale: 1.77 }} />
					</div>
					<div className="">
						<img src="/gear/cdj-3000x/spec_01.webp" alt="Top view" className="h-full object-contain relative -left-[0.025cqw]" style={{ scale: 1.77 }} />
					</div>
					<div className="">
						<img src="/gear/djm-a9/DJM-A9-cgi-top-pc.png" alt="Top view" className="h-full object-contain relative top-[0.925cqw]" style={{ scale: 1.68 }} />
					</div>
					<div className="">
						<img src="/gear/cdj-3000x/spec_01.webp" alt="Top view" className="h-full object-contain relative -left-[0.025cqw]" style={{ scale: 1.77 }} />
					</div>
					<div className="">
						<img src="/gear/cdj-3000x/spec_01.webp" alt="Top view" className="h-full object-contain relative -left-[0.025cqw]" style={{ scale: 1.77 }} />
					</div>
				</div>
			</div>
		</div>

		<div className="flex flex-col gap-4">
			<div className="text-xl font-snasm">Rear view</div>

			<div className="@container">
				<div className="grid gap-0.5 -mt-[7cqw] -mb-[7.5cqw]" style={{ gridTemplateColumns: `${CDJ_3000X_WIDTH_MM}fr ${CDJ_3000X_WIDTH_MM}fr ${DJM_A9_WIDTH_MM}fr ${CDJ_3000X_WIDTH_MM}fr ${CDJ_3000X_WIDTH_MM}fr` }}>
					<div className="">
						<img src="/gear/cdj-3000x/spec_05.webp" alt="Top view" className="h-full object-contain" style={{ scale: 1.3 }} />
					</div>
					<div className="">
						<img src="/gear/cdj-3000x/spec_05.webp" alt="Top view" className="h-full object-contain" style={{ scale: 1.3 }} />
					</div>
					<div className="">
						<img src="/gear/djm-a9/DJM-A9-cgi-rear-pc.png" alt="Top view" className="h-full object-contain relative -top-[0.25cqw]" style={{ scale: 1.1 }} />
					</div>
					<div className="">
						<img src="/gear/cdj-3000x/spec_05.webp" alt="Top view" className="h-full object-contain" style={{ scale: 1.3 }} />
					</div>
					<div className="">
						<img src="/gear/cdj-3000x/spec_05.webp" alt="Top view" className="h-full object-contain" style={{ scale: 1.3 }} />
					</div>
				</div>
			</div>
		</div>
	</div>
}