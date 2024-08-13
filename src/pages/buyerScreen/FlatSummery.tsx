import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "@/utils/Container";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const FlatSummery = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="bg-[#FDF0E7]">
          <CardHeader>
            <CardTitle className="text-secondary">2K+</CardTitle>
            <CardDescription>New Flat Listed</CardDescription>
          </CardHeader>
          <CardFooter className="justify-between text-secondary items-center">
            <Link to={"/"} className="underline ">View All</Link>
            <p><FaArrowCircleDown className=""/></p>
          </CardFooter>
        </Card>

        <Card className="bg-[#ECF5FF]">
        <CardHeader>
            <CardTitle className="text-primary">2K+</CardTitle>
            <CardDescription>New Flat Listed</CardDescription>
          </CardHeader>
          <CardFooter className="justify-between text-primary items-center">
            <Link to={"/"} className="underline ">View All</Link>
            <p><FaArrowCircleDown className=""/></p>
          </CardFooter>
        </Card>

        <Card className="bg-[#FDF0E7]">
        <CardHeader>
            <CardTitle className="text-secondary">2K+</CardTitle>
            <CardDescription>New Flat Listed</CardDescription>
          </CardHeader>
          <CardFooter className="justify-between text-secondary items-center">
            <Link to={"/"} className="underline ">View All</Link>
            <p><FaArrowCircleDown className=""/></p>
          </CardFooter>
        </Card>
        <Card className="bg-[#ECF5FF]">
        <CardHeader>
            <CardTitle className="text-primary">2K+</CardTitle>
            <CardDescription>New Flat Listed</CardDescription>
          </CardHeader>
          <CardFooter className="justify-between text-primary items-center">
            <Link to={"/"} className="underline ">View All</Link>
            <p><FaArrowCircleDown className=""/></p>
          </CardFooter>
        </Card>


      </div>
    </Container>
  );
};

export default FlatSummery;
