import classes from "./CssModules.module.scss";

export const CssModule = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>- CSS Modules -</p>
            <button>FIGHT</button>
        </div>
    );
};
