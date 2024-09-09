export const ChildArea = (props) => {
    const { open } = props;
    return (
        <>
            {open ? (
                <div>
                    <p>child component</p>
                </div>
            ) : null}
        </>
    );
};
