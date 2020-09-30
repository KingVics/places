import React,  {useState, useContext} from "react"

import Card from "../../shared/UIElements/Card"
import Button from "../../shared/FormElement/Button"
import Modal from  "../../shared/UIElements/modal"
import Map from "../../shared/UIElements/Map"
import {AuthContext} from "../../shared/context/Auth-context"

import "./PlaceItem.css"

const PlaceItem = props => {
    const auth = useContext(AuthContext)
    const [showMap, setShowMap] = useState(false)
    
    const [showWarmingModal, setWarmingModal] = useState(false)

   const openMapHandler = () => {
        setShowMap(true)
    }

    const closeMapHandler = () => {
        setShowMap(false)
    }

    const openWarmingModal = () => {
        setWarmingModal(true)
    }

    const closeWarwingModal = () => {
        setWarmingModal(false)
    }

    const confirmDeleteHandler = () => {
        setWarmingModal(false)
        console.log("DELETING")
    }

    return (
        <React.Fragment>
            <Modal show={showMap}
                 onCancel={closeMapHandler} 
                 header={props.address}
                 contentClass="place-item__modal-content"
                 footerClass="place-item__modal-actions"
                 footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    <Map center={props.coordinates} zoom={16}/>
                </div>
            </Modal>
            <Modal 
                show={showWarmingModal}
                onCancel={closeWarwingModal}
                header="Are you sure?"
                footerClass="place-item__modal-actions"
                footer=
                 {<React.Fragment>
                     <Button inverse onClick={closeWarwingModal}> CANCEL</Button>
                     <Button danger onClick={confirmDeleteHandler}> DELETE</Button>
                 </React.Fragment> 
                 }
                >
                    <p>Do you want to proceed?</p>

            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                    <img src={props.image} alt={props.title} />  
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                        {auth.isLoggedIn && 
                            <Button to={`/places/${props.id}`}>EDIT</Button>
                        }
                        {auth.isLoggedIn && 
                            <Button danger onClick={openWarmingModal}>DELETE</Button>
                        }

                    </div>
                </Card>
            </li>
        </React.Fragment>


    )
};



export default PlaceItem;