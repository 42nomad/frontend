import React from 'react';
import LostDoc from './LostDoc';
import Header from '../../../components/Header/Header';
import AddLostDoc from '../../../assets/images/AddLostDoc.svg';
import useLostList from '../logics/useLostList';

function Lost() {
	const docList = useLostList();
	const imgURL = process.env.REACT_APP_IMG_URL;

	return (
		<>
			<Header />
			<div className="bg-nomad-sand min-h-full pt-12">
				<div className="grid grid-cols-2 gap-5 p-8 box-border">
					<LostDoc
						isMyPage={false}
						docData={{ postId: 0, location: '분실물 등록하기', imgKey: AddLostDoc, date: '' }}
					/>
					{docList &&
						docList.map((doc) => (
							<LostDoc
								key={doc.postId}
								isMyPage={false}
								docData={{
									postId: doc.postId,
									location: doc.location,
									imgKey: imgURL + doc.imgKey,
									date: doc.date,
								}}
							/>
						))}
				</div>
			</div>
		</>
	);
}

export default Lost;
