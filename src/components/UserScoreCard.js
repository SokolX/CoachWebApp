import React from 'react';
import Moment from 'react-moment';
import { Link, Route } from 'react-router-dom';

const UserScoreCard = (props) => {
    
        return (
                <div className="containerAccount">
                    <h1 className="card-header">{props.name}
                        <Link to={props.toMessage}><button className="btn btn-success">Wiadomości</button></Link>
                    </h1>
                            <div class="row">
                                <div class="col-lg-4">E-mail:</div>
                                <div class="col-lg-8">{ props.email }</div>
                            </div>
                        
                        <h2 className="card-header">Podstawowe informacje: </h2>
                            <div class="row">
                                <div class="col-lg-4">Miejsce zamieszkania:</div>
                                <div class="col-lg-8">{ props.address }</div>
                                <div class="col-lg-4">Data urodzenia:</div>
                                <div class="col-lg-8">
                                    <Moment unix format="DD/MM/YYYY">{ props.dateOfBirth }</Moment>
                                </div>
                                <div class="col-lg-4">Wzrost:</div>
                                <div class="col-lg-8">{ props.height } cm</div>
                                <div class="col-lg-4">Waga:</div>
                                <div class="col-lg-8">{ props.weight } kg</div>
                                <div class="col-lg-4">Płeć:</div>
                                <div class="col-lg-8">{props.genderType}</div> 
                            </div>
                        
                        <h2 className="card-header">BMI
                           <Link to={props.toBmi}><button className="btn btn-success">Wszystkie</button></Link>
                        </h2>
                            <div class="row">
                                <div class="col-lg-4">BMI:</div>
                                <div class="col-lg-8">{ props.measureBMI }</div>
                                <div class="col-lg-4">Liczba wykonanych pomiarów:</div>
                                <div class="col-lg-8">{ props.numberOfBmi }</div>
                            </div>

                        <h2 className="card-header">Treningi
                            <Link to={props.toHistory}><button className="btn btn-success">Wszystkie</button></Link>
                        </h2>
                            <div class="row">
                                <div class="col-lg-4">Liczba pokonanych kroków:</div>
                                <div class="col-lg-8">{ props.userStepsCounterEver } kroków</div>
                                <div class="col-lg-4">Liczba odbytych treningów:</div>
                                <div class="col-lg-8">{ props.numberOfWorkout }</div>
                            </div> 
                </div>
                );
};

export default UserScoreCard;