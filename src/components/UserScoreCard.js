import React from 'react';
import Moment from 'react-moment';
import { Link, Route } from 'react-router-dom';

const UserScoreCard = (props) => {
    
        return (
                <section class="containerCenter">
                    <h1>{props.name}
                        <Link to={props.toMessage}><button className="btn btn-success">Wiadomości</button></Link>
                    </h1>
                            <div>
                                <div>E-mail:</div>
                                <div>{ props.email }</div>
                            </div>
            
                        <h2>Podstawowe informacje: </h2>
                            <div class="row">
                                <div>Miejsce zamieszkania:</div>
                                <div>{ props.address }</div>
                                Data urodzenia:
                                
                                    <Moment unix format="DD/MM/YYYY">{ props.dateOfBirth }</Moment>
                                
                                
                                { props.height } cm
                                
                                { props.weight } kg
                                
                                {props.genderType}
                            </div>
                        
                        <h2>BMI
                           <Link to={props.toBmi}><button className="btn btn-success">Wszystkie</button></Link>
                        </h2>
                            <div>
                                <div>BMI:</div>
                                <div>{ props.measureBMI }</div>
                                <div>Liczba wykonanych pomiarów:</div>
                                <div>{ props.numberOfBmi }</div>
                            </div>

                        <h2 className="card-header">Treningi
                            <Link to={props.toHistory}><button className="btn btn-success">Wszystkie</button></Link>
                        </h2>
                            <div class="row">
                                <div>Liczba pokonanych kroków:</div>
                                <div>{ props.userStepsCounterEver } kroków</div>
                                <div>Liczba odbytych treningów:</div>
                                <div>{ props.numberOfWorkout }</div>
                            </div> 
                </section>
                );
};

export default UserScoreCard;