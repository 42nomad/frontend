import React from 'react';
import LostDoc from './LostDoc';
import useLostList from '../logics/useLostList';
import Loading from '../../../components/Loading/Loading';

function Lost() {
	const docList = useLostList();

	return (
		<>
			{docList === null && <Loading />}
			{docList !== null && (
				<div className="bg-nomad-sand min-h-full pt-12">
					<div className="grid grid-cols-2 gap-5 p-8 box-border">
						<LostDoc
							isMyPage={false}
							docData={{ postId: 0, location: '분실물 등록하기', imgKey: 'AddLostDoc.svg', date: '' }}
						/>
						{docList.map((doc) => (
							<LostDoc
								key={doc.postId}
								isMyPage={false}
								docData={{
									postId: doc.postId,
									location: doc.location,
									imgKey: doc.imgKey,
									date: doc.date,
								}}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
}

export default Lost;
