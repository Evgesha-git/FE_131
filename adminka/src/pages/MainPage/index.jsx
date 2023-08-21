import { useSelector } from "react-redux";
import { useAction } from "../../hooks/useAction";

const MainPage = () => {
    const { data } = useSelector((state) => state.data);

    return (
        <div className="container">
            {!data?.products && <h2>Записи пока отсутствуют</h2>}
            {data?.products?.map((item, i) => (
                <div key={i.toString()}>
                    <h2 className="title">{item.title}</h2>
                    <p className="min_desc">{item.minDesc}</p>
                    <p className="desc">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default MainPage;
