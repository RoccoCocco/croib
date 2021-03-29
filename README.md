<center>

![test](./extra/logo.png)

### Validate & generate Croatian OIB

</center>

Simple Typescript utility script for validation of Croatian Personal identification number. Also it can generate valid OIB for testing purposes.

#### Usage

```typescript
import { validateOIB, generateRandomOIB } from 'croib';

const randomOib = generateRandomOIB();
const isValid = validateOIB(randomOib);

if (isValid) {
  throw new Error('Invalid OIB');
}
```

#### Thanks

To [@gnekich](https://github.com/gnekich) for the idea. Check his Javscript library [oiblib](https://www.npmjs.com/package/oiblib).
