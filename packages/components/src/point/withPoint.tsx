import { jsx } from '@ali/f2-jsx';
import Geometry from '../geometry';

export default View => {
  return class Point extends Geometry {
    render() {
      return <View />
    }
  }
}
