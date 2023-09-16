import { Field, Formik, Form, ErrorMessage } from "formik";
import styles from '../styles/product.module.css'

function Product() {

    return (
        <>
        <div className={styles.addProductHeader}>
            <h1>Add Product</h1>
        </div>
        <div className={styles.addProduct}>            
            <Formik 
                initialValues={
                    {
                        productName: '',
                        manufactureDate: '',
                        expiryDate: ',',
                        price: '',
                        type: '',
                        isActive: ''

                    }
                }
                validate={values => {
                    const errors = {};
                    if (!values.productName) {
                        errors.productName = 'Required';
                    }
                    return errors;
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {
                    props => (
                        <Form className={styles.formContainer}>
                            <div>
                                <label className={styles.addProductLabel}>Product Name</label>
                                <Field  className= {styles.addProductInput} name="productName" type="productName"></Field>
                                <ErrorMessage name="productName" component="div" />
                            </div>

                            <div>
                                <label className={styles.addProductLabel}>Manufacturing Date</label>
                                <Field  className= {styles.addProductInput} name="manufactureDate" type="manufactureDate"></Field>
                            </div>

                            <div>
                                <label className={styles.addProductLabel}>Expiry Date</label>
                                <Field className= {styles.addProductInput} name="expiryDate" type="expiryDate"></Field>
                            </div>

                            <div>
                                <label className={styles.addProductLabel}>Price</label>
                                <Field className= {styles.addProductInput} name="price" type="price"></Field>
                            </div>

                            <div>
                                <label className={styles.addProductLabel}>Type</label>
                                <Field className= {styles.addProductInput} name="type" type="type"></Field>
                            </div>

                            <div>
                                <label className={styles.addProductLabel}>Is Active</label>
                                <Field className= {styles.addProductInput} name="isActive" type="checkbox"></Field>
                            </div>

                            <div className={styles.addProductButton}>
                                <button type="submit" disabled={props.isSubmitting}>Submit</button>
                            </div>

                        </Form>
                    )
                }



            </Formik>
        </div>
        </>
    );
}

export default Product;