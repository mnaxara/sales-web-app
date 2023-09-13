import { Grid, Skeleton, Typography } from "@mui/material";
import { ProductImage } from "../ProductImage";
import { Price } from "../../ds/atoms";
import { ProductCondition } from "../ProductCondition";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks";

export default function ProductPage() {
  const { id } = useParams();
  const { isLoading, error, data: product } = useProduct(id);

  if (error) {
    return console.error(error);
  }

  //const { name, imageUrl, description, price, condition } = product;

  return (
    <>
      <Typography sx={{ m: 2 }} variant="h1" component={"h4"}>
        {isLoading ? <Skeleton /> : product.name}
      </Typography>
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid container item md={3}>
          <Grid item md={12}>
            {isLoading ? (
              <Skeleton variant="rectangular" width={400} height={400} />
            ) : (
              <ProductImage
                imageUrl={product.imageUrl}
                name={product.name}
                width={400}
              />
            )}
          </Grid>
        </Grid>
        <Grid container item md={9} direction={"column"}>
          <Grid container item spacing={2} sx={{ pb: 2 }}>
            <Grid item>
              {isLoading ? (
                <Skeleton width={100} />
              ) : (
                <ProductCondition>{product.condition}</ProductCondition>
              )}
            </Grid>
            <Grid item>
              {isLoading ? (
                <Skeleton width={100} />
              ) : (
                <Price price={product.price} />
              )}
            </Grid>
          </Grid>
          <Grid item>
            <Typography>
              {isLoading ? (
                <Skeleton variant="rectangular" width={400} height={200} />
              ) : (
                product.description
              )}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  // return (
  //   <>
  //     <Typography sx={{ m: 2 }} variant="h1" component={"h4"}>
  //       {name}
  //     </Typography>
  //     <Grid container spacing={2} sx={{ px: 2 }}>
  //       <Grid container item md={3}>
  //         <Grid item md={12}>
  //           <ProductImage imageUrl={imageUrl} name={name} width={400} />
  //         </Grid>
  //       </Grid>
  //       <Grid container item md={9} direction={"column"}>
  //         <Grid container item spacing={2} sx={{ pb: 2 }}>
  //           <Grid item>
  //             <ProductCondition>{condition}</ProductCondition>
  //           </Grid>
  //           <Grid item>
  //             <Price price={price} />
  //           </Grid>
  //         </Grid>
  //         <Grid item>
  //           <Typography>{description}</Typography>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   </>
  // );
}
