import Rx from 'rxjs/Rx';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
 
var source = Observable.range(0, 3)
    .do(function (x) { console.log(x); });

source.subscribe();