import "./style.css";

const Container = ({ children }) => (
    <div className="container">
        <div className="container__element">
            {children}
        </div>
    </div>
);

export default Container;