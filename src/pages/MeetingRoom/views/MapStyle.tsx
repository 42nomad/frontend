import { css } from '@emotion/react';
import tw from 'twin.macro';

export const contentsCenter = css`
	${tw`flex items-center justify-center`}
`;

export const mapBorder = css`
	${tw`divide-black divide-y-[1px] divide-x-[1px] border-black border-r-[1px] border-b-[1px]`}
`;

export const leftTopBorder = css`
	${tw`border-black border-t-[1px] border-l-[1px]`}
`;

export const ableRoom = css`
	${tw`bg-white text-black`}
`;

export const occupiedRoom = css`
	${tw`flex-col bg-nomad-green text-nomad-sand`}
`;

export const bellIcon = css`
	${tw`w-5 h-5 absolute right-1 top-1`}
`;
