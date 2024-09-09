export const StyledJsx = () => {
    return (
        <div className="container">
            <p className="title">- Styled JSX -</p>
            <button>FIGHT</button>
            <style jsx="true">{`
                .container {
                    border: solid 2px red;
                    border-radius: 20px;
                    padding: 8px;
                    margin: 8px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                .title {
                    margin: 0;
                    color: white;
                }
            `}</style>
        </div>
    );
};
