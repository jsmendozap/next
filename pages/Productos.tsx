import React from 'react';
import { PrismaClient } from '.prisma/client';
import safeJsonStringify from 'safe-json-stringify';

const prisma = new PrismaClient();

export async function getServerSidePops(){

    const productos = await prisma.producto.findMany({
        include:{
            inventario: {
                include: {
                    movimientoInventario: {
                        include: {
                            usuario: true,
                        }
                    }
                }
            }
        }
    });
    console.log(productos);
    return {
        props: { productos: JSON.parse(safeJsonStringify(productos)) },
    }
}

const Productos = ({ productos }) => {
    console.log('Variable en el front: ', productos);
    return (
        <div>
            Estos son mis productos: 
            <div>
                Tabla de productos
            </div>
        </div>
    )
}

export default Productos;
