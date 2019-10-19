import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Curso from './pages/cursos'
import Contato from './pages/contato'

export default props =>(

    <Switch>
        <Route path="/curso" component={Curso}/>
        <Route path="/contato" component={Contato}/>
        <Route path="*" component={Curso}/>
    </Switch>

)