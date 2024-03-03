import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";

// interface Props {
//     children: React.ReactNode;
// }

export const LocationAnimation = () => {
    return (
        <Container className="flex space-x-16 m-5">
              <Typography
                variant="caption1"
                component="span"
                className="text-secondary capitalize hover:text-gray-600 animate"
    >
                Servon
                {/* {path !== "accueil" ? ( path.replace(/-/g," ") ) :  <RiHome3Line className="inline -mt-1"/> } */}
        </Typography>
        <Typography
                variant="caption2"
                component="span"
                className="text-secondary capitalize hover:text-gray-600 animate"
    >
                Lésigny
                {/* {path !== "accueil" ? ( path.replace(/-/g," ") ) :  <RiHome3Line className="inline -mt-1"/> } */}
        </Typography>
        <Typography
                variant="caption3"
                component="span"
                className="text-secondary capitalize hover:text-gray-600 animate"
    >
                Brie Compte Robert
                {/* {path !== "accueil" ? ( path.replace(/-/g," ") ) :  <RiHome3Line className="inline -mt-1"/> } */}
        </Typography>
        <Typography
                variant="lead"
                component="span"
                className="text-secondary capitalize hover:text-gray-600 animate"
    >
                Santeny
                {/* {path !== "accueil" ? ( path.replace(/-/g," ") ) :  <RiHome3Line className="inline -mt-1"/> } */}
        </Typography>
        <Typography
                variant="body-base"
                component="span"
                className="text-secondary capitalize hover:text-gray-600 animate"
    >
                Marolle-en-Brie
                {/* {path !== "accueil" ? ( path.replace(/-/g," ") ) :  <RiHome3Line className="inline -mt-1"/> } */}
        </Typography>
            <Typography
                variant="body-lg"
                component="span"
                className="text-gray capitalize hover:text-gray-600 animate"
    >
                Servon
                {/* {path !== "accueil" ? ( path.replace(/-/g," ") ) :  <RiHome3Line className="inline -mt-1"/> } */}
        </Typography>
           <Typography
                variant="lead"
                component="span"
                className="text-secondary capitalize hover:text-gray-600 animate"
    >
                Ferrolle
                {/* {path !== "accueil" ? ( path.replace(/-/g," ") ) :  <RiHome3Line className="inline -mt-1"/> } */}
        </Typography>
           <Typography
                variant="lead"
                component="span"
                className="text-secondary capitalize hover:text-gray-600 animate"
    >
                Boissy
                {/* {path !== "accueil" ? ( path.replace(/-/g," ") ) :  <RiHome3Line className="inline -mt-1"/> } */}
        </Typography>
           <Typography
                variant="lead"
                component="span"
                className="text-secondary capitalize hover:text-gray-600 animate"
    >
                Villecresne
                {/* {path !== "accueil" ? ( path.replace(/-/g," ") ) :  <RiHome3Line className="inline -mt-1"/> } */}
        </Typography>
           <Typography
                variant="lead"
                component="span"
                className="text-secondary capitalize hover:text-gray-600 animate"
    >
                Santeny
                {/* {path !== "accueil" ? ( path.replace(/-/g," ") ) :  <RiHome3Line className="inline -mt-1"/> } */}
        </Typography>

        </Container>
    )
}