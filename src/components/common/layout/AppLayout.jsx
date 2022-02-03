import Header from "./Header";
import Content from "./Content";

const AppLayout = ({ children }) => {
    return (
        <div id="app-layout">
            <Header />
            <Content>
                {children}
            </Content>
        </div>
    );
};

export default AppLayout;