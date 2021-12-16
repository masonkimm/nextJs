## Components

### Link

```
import Link from 'next/link'
```

- direct internal routing without any routing tool <Link href=''></Link>
- place className within a tag not in the Link component <Linkhref=''> <a className=''></a> </Link>

### Image

```
import Image from 'next/image'
```

- supports image optimization by default: allows for resizing, optimizing, and serving images
- images are lazy loaded. Img loads when scrolled into the viewport

### Head

```
import Head from 'next/head'
```

- <Head> <title> title for the tab goes here </title> </Head>
