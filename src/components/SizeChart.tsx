
import React from "react";
import { Table } from "@/components/ui/table";

const SizeChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-pacifico text-barbie-300 mb-6 text-center">Size Chart</h2>
      
      <div className="overflow-x-auto">
        <Table>
          <thead>
            <tr className="bg-lavender-100">
              <th className="text-center font-medium">Size</th>
              <th className="text-center font-medium">Bust (inches)</th>
              <th className="text-center font-medium">Waist (inches)</th>
              <th className="text-center font-medium">Hips (inches)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center font-medium">XS</td>
              <td className="text-center">30-32</td>
              <td className="text-center">24-26</td>
              <td className="text-center">32-34</td>
            </tr>
            <tr>
              <td className="text-center font-medium">S</td>
              <td className="text-center">34-36</td>
              <td className="text-center">28-30</td>
              <td className="text-center">36-38</td>
            </tr>
            <tr>
              <td className="text-center font-medium">M</td>
              <td className="text-center">38-40</td>
              <td className="text-center">32-34</td>
              <td className="text-center">40-42</td>
            </tr>
            <tr>
              <td className="text-center font-medium">L</td>
              <td className="text-center">42-44</td>
              <td className="text-center">36-38</td>
              <td className="text-center">44-46</td>
            </tr>
            <tr>
              <td className="text-center font-medium">XL</td>
              <td className="text-center">46-48</td>
              <td className="text-center">40-42</td>
              <td className="text-center">48-50</td>
            </tr>
          </tbody>
        </Table>
      </div>
      
      <div className="mt-8 space-y-4 text-sm">
        <h3 className="font-semibold text-lg">How to Measure</h3>
        <div className="space-y-2">
          <p className="flex gap-2">
            <span className="font-medium">Bust:</span>
            <span>Measure around the fullest part of your bust, keeping the measuring tape parallel to the floor.</span>
          </p>
          <p className="flex gap-2">
            <span className="font-medium">Waist:</span>
            <span>Measure around your natural waistline, which is the narrowest part of your torso.</span>
          </p>
          <p className="flex gap-2">
            <span className="font-medium">Hips:</span>
            <span>Measure around the fullest part of your hips, keeping the measuring tape parallel to the floor.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SizeChart;
