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
        weightedmean(self, [1,2,3,4], [20,10,30,50])
        weightedmean(self, [80,75,15,65], [15,5,25,20])
        weightedmean(self, [10,100,0,25], [15,40,20,3])

def deviation(self, a,b,c,d, value):
    question = Tex(f"Find the deviation of ",str(value)," in the data set:").shift(UP*3)
    data = Tex(f"{a}",", ",f"{b}",", ",f"{c}",", ",f"{d}").shift(UP*2.5)
    step1 = Tex("Find the mean").shift(UP*2).scale(0.5)
    meanFrac1 = MathTex(f"{{",str(a)," + ",str(b)," + ",str(c)," + ",str(d),f" \\over 4 }}").shift(UP)
    meanFrac2= MathTex(f"{{",str(a+b+c+d),f" \\over 4 }}").shift(UP)
    meanFrac3= Tex(str(try_int((a+b+c+d)/4))).shift(UP*1.5)
    step2 = Tex("Subtract the mean from the observation").shift(UP).scale(0.5)
    meanSub = Tex(str(value), " - ", str(try_int((a+b+c+d)/4)))
    answer = Tex(str(value - try_int((a+b+c+d)/4)))
    underline = Underline(answer, color=YELLOW)

    self.play(Write(question), run_time=2)
    self.play(Write(data), run_time=2)
    self.play(Write(step1), run_time=2)
    self.play(TransformMatchingTex(data.copy(), meanFrac1), run_time=2)
    self.play(TransformMatchingTex(meanFrac1, meanFrac2), run_time=2)
    self.play(ReplacementTransform(meanFrac2, meanFrac3), run_time=2)
    self.play(Write(step2), run_time=2)
    self.play(TransformFromCopy(meanFrac3, meanSub), run_time=3)
    self.wait(2)
    self.play(ReplacementTransform(meanSub, answer), run_time=3)
    self.play(Write(underline), run_time=2)
    self.wait(5)
    self.play(FadeOut(question, shift=RIGHT*5),
                FadeOut(data, shift=RIGHT*5),
                FadeOut(step1, shift=RIGHT*5),
                FadeOut(meanFrac3, shift=RIGHT*5),
                FadeOut(step2, shift=RIGHT*5),
                FadeOut(answer, shift=RIGHT*5),
                FadeOut(underline, shift=RIGHT*5), run_time=2)

class Deviation(Scene):
    def construct(self):
        deviation(self, 10,13,7,2,13)
        deviation(self, 102,103,107,104,102)
        deviation(self, 2048,2022,2019,2011,2022)