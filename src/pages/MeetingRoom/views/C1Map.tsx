import React from 'react';
import { BellAlertIcon, BellSlashIcon } from '@heroicons/react/24/outline';
import { contentsCenter, mapBorder, leftTopBorder, disableRoom, ableRoom, occupiedRoom } from './MapStyle';

function C1Map() {
	const isAvailable = true;
	const [isNoti, setIsNoti] = React.useState<boolean>(false);

	return (
		<div id="MeetingMap" className="grid grid-cols-6 grid-rows-12 h-2/3 w-2/3 mt-5" css={mapBorder}>
			<div className="col-span-2 row-span-1 text-sm" css={[leftTopBorder, contentsCenter, disableRoom]}>
				사물함
			</div>
			<div className="col-start-3 col-span-1 row-span-full text-sm" css={[contentsCenter, disableRoom]}>
				복도
			</div>
			<div className="col-span-3 row-span-1 text-sm" css={[contentsCenter, disableRoom]}>
				사물함
			</div>
			<div
				className="relative col-start-1 col-end-3 row-span-2"
				css={[contentsCenter, isAvailable ? ableRoom : occupiedRoom]}
			>
				{isNoti ? (
					<BellAlertIcon
						className="w-5 h-5 absolute right-1 top-1 fill-nomad-green/50"
						onClick={() => {
							setIsNoti(false);
						}}
					/>
				) : (
					<BellSlashIcon
						className="w-5 h-5  absolute right-1 top-1"
						onClick={() => {
							setIsNoti(true);
						}}
					/>
				)}
				TABLE A
			</div>
			<div className="relative col-start-1 col-end-3 row-span-2" css={[contentsCenter, ableRoom]}>
				{isNoti ? (
					<BellAlertIcon
						className="w-5 h-5 absolute right-1 top-1 fill-nomad-green/50"
						onClick={() => {
							setIsNoti(false);
						}}
					/>
				) : (
					<BellSlashIcon
						className="w-5 h-5  absolute right-1 top-1"
						onClick={() => {
							setIsNoti(true);
						}}
					/>
				)}
				TABLE B
			</div>
			<div className="relative col-start-4 col-span-3 row-start-2 row-span-2" css={[contentsCenter, ableRoom]}>
				{isNoti ? (
					<BellAlertIcon
						className="w-5 h-5 absolute right-1 top-1 fill-nomad-green/50"
						onClick={() => {
							setIsNoti(false);
						}}
					/>
				) : (
					<BellSlashIcon
						className="w-5 h-5  absolute right-1 top-1"
						onClick={() => {
							setIsNoti(true);
						}}
					/>
				)}
				TABLE C
			</div>
			<div className="relative col-span-3 row-span-3" css={[contentsCenter, occupiedRoom]}>
				{isNoti ? (
					<BellAlertIcon
						className="w-5 h-5 absolute right-1 top-1  text-yellow-500"
						onClick={() => {
							setIsNoti(false);
						}}
					/>
				) : (
					<BellSlashIcon
						className="w-5 h-5  absolute right-1 top-1"
						onClick={() => {
							setIsNoti(true);
						}}
					/>
				)}
				회의실 A<div className="text-xs">2시간 45분 사용중</div>
			</div>
			<div className="col-start-1 col-end-3 row-span-7 text-sm" css={[contentsCenter, disableRoom]}>
				C1 Cluster
			</div>
			<div className="relative col-span-3 row-span-3" css={[contentsCenter, ableRoom]}>
				{isNoti ? (
					<BellAlertIcon
						className="w-5 h-5 absolute right-1 top-1 fill-nomad-green/50"
						onClick={() => {
							setIsNoti(false);
						}}
					/>
				) : (
					<BellSlashIcon
						className="w-5 h-5  absolute right-1 top-1"
						onClick={() => {
							setIsNoti(true);
						}}
					/>
				)}
				회의실 B
			</div>
			<div className="relative col-span-3 row-span-2" css={[contentsCenter, ableRoom]}>
				{isNoti ? (
					<BellAlertIcon
						className="w-5 h-5 absolute right-1 top-1 fill-nomad-green/50"
						onClick={() => {
							setIsNoti(false);
						}}
					/>
				) : (
					<BellSlashIcon
						className="w-5 h-5  absolute right-1 top-1"
						onClick={() => {
							setIsNoti(true);
						}}
					/>
				)}
				TABLE D
			</div>
			<div className="col-span-3 text-sm" css={[contentsCenter, disableRoom]}>
				사물함
			</div>
		</div>
	);
}
export default C1Map;
