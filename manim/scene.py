from manim import *
import numpy as np

def try_int(n):
    if int(n) == n:
        return int(n)
    return round(n, 3)

def mean(self, nums, sub):
    subnums = list(map(lambda x: str(x - sub), nums))
    sum_subnums = sum(nums) - sub * len(nums)
    mean_subnums = sum_subnums / len(nums)
    if mean_subnums == int(mean_subnums):
        mean_subnums = int(mean_subnums)
    meanText = Tex("Calculate the mean of:").shift(UP*3)
    meanNumText = Tex(*(" , ".join(map(str,nums)).split(" "))).shift(UP*2)
    subNumText = Tex(f"Subtract {sub} from each term").shift(UP*1.5).scale(0.5)
    SubNums= Tex(*(" , ".join(subnums).split(" "))).shift(UP)
    takeAverage = Tex(f"Take the average").shift(UP*0.5).scale(0.5)
    meanNumTextAdd = MathTex(r"{ {{"+r"}} + {{".join(subnums)+r"}} \over {{" + str(len(nums))+r"\relax}} }", ).shift(DOWN*0.5)
    frac = MathTex(r"{ {{"+str(sum_subnums)+r"}} \over {{" + str(len(nums))+r"\relax}} }", ).shift(DOWN*0.5)
    subbed = MathTex(str(mean_subnums))
    addNumText = Tex(f"Add {sub} back on").shift(DOWN*0.5).scale(0.5)
    subbed2 = MathTex(str(mean_subnums), f" + {sub}").shift(DOWN)
    answer = MathTex(str(mean_subnums + sub)).shift(DOWN)
    underline = Underline(answer, color=YELLOW)


    self.play(Write(meanText), run_time=2)
    self.play(Write(meanNumText), run_time=2)
    self.play(Write(subNumText), run_time=2)
    self.play(TransformFromCopy(meanNumText,SubNums), run_time=2)
    self.play(Write(takeAverage), run_time=2)
    self.play(TransformMatchingTex(SubNums.copy(),meanNumTextAdd), run_time=2)
    self.play(TransformMatchingTex(meanNumTextAdd,frac), run_time=2)
    self.play(ReplacementTransform(frac,subbed), run_time=2)
    self.play(Write(addNumText), run_time=2)
    self.play(TransformMatchingTex(subbed.copy(),subbed2), run_time=2)
    self.play(ReplacementTransform(subbed2,answer), run_time=2)
    self.play(Write(underline), run_time=2)
    self.wait(5)
    self.play(FadeOut(meanText, shift=RIGHT*5),
              FadeOut(meanNumText, shift=RIGHT*5),
              FadeOut(subNumText, shift=RIGHT*5),
              FadeOut(SubNums, shift=RIGHT*5),
              FadeOut(takeAverage, shift=RIGHT*5),
              FadeOut(subbed, shift=RIGHT*5),
              FadeOut(addNumText, shift=RIGHT*5),
              FadeOut(answer, shift=RIGHT*5),
              FadeOut(underline, shift=RIGHT*5), run_time=2)

class MeanOfLargeNumbers(Scene):
    def construct(self):
        mean(self, [100, 105, 104, 101, 106, 102], 100)
        mean(self, [97, 103, 102, 107, 98, 105], 100)
        mean(self, [98753, 98712, 98786, 98764, 98775], 98700)

def weightedmean(self, values, weights):
    if len(values) != len(weights):
        raise Exception("Values and weights must be the same length")
    data = np.ndarray(shape=(len(values)+1, 3))
    data[:-1, 0] = np.array(values)
    data[:-1, 1] = np.array(weights)
    data[:-1, 2] = data[:-1, 0] * data[:-1, 1]
    data[-1, 0] = np.sum(data[:-1, 0])
    data[-1, 1] = np.sum(data[:-1, 1])
    data[-1, 2] = np.sum(data[:-1, 2])
    
    table = Table([[str(try_int(j)) for j in i] for i in data], row_labels=[Tex("") for i in range(len(values))] + [Tex("Total")], col_labels=[Tex("Values(x)"), Tex("Weights(w)"), Tex("xw")])
    table.scale(0.5).shift(DOWN)
    meanText = Tex("Calculate the weighted mean from this table:").shift(UP*3)
    meanText2 = Tex("Multiply the values by the weight, then get the total.").shift(UP*2.5).scale(0.5)
    meanText3 = Tex("Divide that total by the total of the weights").shift(UP*2).scale(0.5)
    box1 = SurroundingRectangle(table.get_columns()[3][-1], color=BLUE)
    box2 = SurroundingRectangle(table.get_columns()[2][-1], color=RED)
    division = MathTex(f"{{ {str(try_int(data[-1, 2]))}", "\\over",f" {str(try_int(data[-1, 1]))} }}").shift(LEFT*3)
    answer = MathTex(str(try_int(data[-1, 2] / data[-1, 1]))).shift(LEFT*3)
    box3 = SurroundingRectangle(division[0], color=BLUE)
    box4 = SurroundingRectangle(division[2], color=RED)
    underline = Underline(answer, color=YELLOW)
    self.play(Write(meanText), run_time=2)
    #self.play(Write(table.get_labels()), run_time=2)
    self.play(Write(table.get_columns()[0]), 
              Write(table.get_columns()[1]), 
              Write(table.get_columns()[2]), run_time=2, lag_time=0.5)
    self.wait(3)
    self.play(Write(meanText2), run_time=2)
    self.play(Write(table.get_columns()[3]), run_time=2)
    self.play(Write(meanText3), run_time=2)
    self.play(Write(box1),Write(box2), run_time=2)
    self.play(Write(division),Write(box3),Write(box4), run_time=2)
    self.play(ReplacementTransform(Group(division, box3, box4), answer), run_time=2)
    self.play(Write(underline), run_time=2)
    self.wait(5)
    self.play(FadeOut(meanText, shift=RIGHT*5),
                FadeOut(meanText2, shift=RIGHT*5),
                FadeOut(meanText3, shift=RIGHT*5),
                FadeOut(table.get_entries(), shift=RIGHT*5),
                FadeOut(box1, shift=RIGHT*5),
                FadeOut(box2, shift=RIGHT*5),
                FadeOut(answer, shift=RIGHT*5),
                FadeOut(underline, shift=RIGHT*5), run_time=2)

    

class WeightedMean(Scene):
    def construct(self):
        weightedmean(self, [1,2,3,4,5], [0.1,0.2,0.2,0.3,0.2])