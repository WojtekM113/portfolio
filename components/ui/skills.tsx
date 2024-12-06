import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SkillsSection() {
  return (
    <div className="w-full mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Skill 1 */}
            <Card className="flex flex-col items-center text-center p-4">
              <CardHeader>
                <CardTitle>Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Proficient in C++, C#, and Python.</p>
              </CardContent>
            </Card>

            {/* Skill 2 */}
            <Card className="flex flex-col items-center text-center p-4">
              <CardHeader>
                <CardTitle>Game Engines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Experienced with Unity and Unreal Engine.</p>
              </CardContent>
            </Card>

            {/* Skill 3 */}
            <Card className="flex flex-col items-center text-center p-4">
              <CardHeader>
                <CardTitle>Problem Solving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Strong analytical and debugging skills.</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
