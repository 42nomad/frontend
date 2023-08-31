import React from 'react';
import c1 from '../../../assets/images/c1_seoul.svg';

// const click = () => {
//     Swal.fire({
//         title: 'C1R1S1',
//         text: 'sojoo님이 사용중이에요.',
//         showClass: {
//             popup: ''
//         },
//           hideClass: {
//             popup: ''
//         },
//         heightAuto: false,
//         confirmButtonColor: '#20633F',
//         confirmButtonText: '확인'
//     });
// }

interface ClusterMapProps {
	mapName: string;
}

function ClusterMap({ mapName }: ClusterMapProps) {
	// useEffect(() => {
	//     const obj = document.getElementById('cluster-map') as HTMLObjectElement;
	//     obj.addEventListener('load', () => {
	//         const seatRect = obj.contentDocument?.querySelector('rect#c1r1s1') as SVGRectElement;
	//         const seatImg = obj.contentDocument?.querySelector('image#c1r1s1') as SVGRectElement;
	//         seatRect.setAttribute('fill', '#20633F');
	//         seatImg.style.cursor = 'pointer';
	//         seatImg.onclick = click;
	//     })
	// }, []);

	return (
		<>
			<object className="w-[80%] h-[80%]" id="cluster-map" aria-label="cluster-map" data={c1} />
			<div>{mapName}</div>
		</>
	);
}

export default ClusterMap;
