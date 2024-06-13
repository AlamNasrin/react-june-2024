import { useEffect } from "react";
import { useParams } from "react-router-dom";

function EditProduct() {

    const params = useParams();
    useEffect(() => {
        console.log("params", params);
    });

    return (
    <div>
        <h4>Edit Product</h4>

        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="proce">Price</label>
                <input className="form-control" id="price"/>
            </div>
            <div className="form-group">
                <label htmlFor="desc">Description</label>
                <input className="form-control" id="desc"/>
            </div>
        </form>
    </div>
    )
}

export default EditProduct;