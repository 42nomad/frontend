interface StateHandler<T> {
	state: T;
	setState: React.Dispatch<React.SetStateAction<T>>;
}

export default StateHandler;
